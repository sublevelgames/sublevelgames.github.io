// 블로그 조회수 관리 클래스
class BlogViewCounter {
    constructor() {
        this.database = firebase.database();
        this.sessionViewed = new Set();
    }

    // 블로그 포스트 ID 생성 (URL 기반)
    generatePostId(url) {
        const path = url || window.location.pathname;
        // /blog/post-title/ 형식에서 post-title 추출
        const parts = path.split('/').filter(p => p);
        
        if (parts[0] === 'blog' && parts[1]) {
            return parts[1];
        }
        
        // 기본값은 전체 경로를 ID로 변환
        return path.replace(/[^a-zA-Z0-9-]/g, '-').replace(/^-+|-+$/g, '') || 'home';
    }

    // 블로그 포스트 조회수 초기화
    initPostView(postId, elementId) {
        const viewsRef = this.database.ref(`blog_views/${postId}`);
        
        // 실시간 조회수 업데이트
        viewsRef.on('value', (snapshot) => {
            const views = snapshot.val() || 0;
            this.updateDisplay(elementId, views);
        });

        // 세션당 한 번만 조회수 증가
        const sessionKey = `blog_${postId}`;
        if (!sessionStorage.getItem(sessionKey)) {
            viewsRef.transaction((current) => (current || 0) + 1);
            sessionStorage.setItem(sessionKey, 'true');
        }
    }

    // 화면에 조회수 표시
    updateDisplay(elementId, count) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = count.toLocaleString();
        }
    }

    // 블로그 목록에서 여러 포스트의 조회수 표시
    async displayMultiplePostViews(posts) {
        for (const post of posts) {
            const viewsRef = this.database.ref(`blog_views/${post.id}`);
            const snapshot = await viewsRef.once('value');
            const views = snapshot.val() || 0;
            
            if (post.elementId) {
                this.updateDisplay(post.elementId, views);
            }
        }
    }

    // 인기 블로그 포스트 가져오기
    async getPopularPosts(limit = 5) {
        const snapshot = await this.database.ref('blog_views')
            .orderByValue()
            .limitToLast(limit)
            .once('value');
        
        const posts = [];
        snapshot.forEach((child) => {
            posts.push({
                id: child.key,
                views: child.val()
            });
        });
        
        return posts.reverse();
    }

    // 총 블로그 조회수
    async getTotalBlogViews() {
        const snapshot = await this.database.ref('blog_views').once('value');
        const data = snapshot.val() || {};
        
        let total = 0;
        Object.values(data).forEach(views => {
            total += views;
        });
        
        return total;
    }
}

// 전역 인스턴스 생성
const blogViewCounter = new BlogViewCounter();