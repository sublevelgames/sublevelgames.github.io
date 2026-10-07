// 플레이 버튼: 방문자 기기에 맞춰 메인 버튼을 고르고, 클릭을 GA4 이벤트(play_click)로 보낸다.
(function () {
  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var device = /Android/i.test(ua) ? 'android' : isIOS ? 'ios' : /Mobi/i.test(ua) ? 'mobile' : 'desktop';

  // 숫자가 작을수록 먼저. os 값은 _data/platforms.yml 참고
  var RANK = {
    android: { android: 0, any: 1, mobile: 2, desktop: 8, ios: 9 },
    ios:     { ios: 0, any: 1, mobile: 2, desktop: 8, android: 9 },
    mobile:  { any: 0, mobile: 1, android: 2, ios: 2, desktop: 8 },
    desktop: { any: 0, desktop: 1, android: 2, ios: 3, mobile: 4 }
  }[device];

  function rank(btn) {
    var r = RANK[btn.getAttribute('data-os')];
    return r === undefined ? 5 : r;
  }

  var groups = document.querySelectorAll('.play-group');
  for (var g = 0; g < groups.length; g++) {
    var group = groups[g];
    var btns = Array.prototype.slice.call(group.querySelectorAll('.play-btn'));
    if (btns.length < 2) continue;
    var order = btns.map(function (b, i) { return { b: b, i: i }; });
    order.sort(function (x, y) { return rank(x.b) - rank(y.b) || x.i - y.i; }); // 같은 순위면 작성 순서 유지
    var more = group.querySelector('.play-more');
    for (var i = 0; i < order.length; i++) {
      var b = order[i].b;
      b.classList.toggle('play-main', i === 0);
      b.classList.toggle('play-sub', i > 0);
      group.appendChild(b);
      if (i === 0 && more) group.appendChild(more);
    }
  }

  // 상세 페이지: 모바일에서 메인 버튼이 화면 밖으로 나가면 하단 고정 버튼 표시
  var sticky = document.querySelector('.play-sticky');
  var detailMain = document.querySelector('.play-detail .play-main');
  if (sticky && detailMain && 'IntersectionObserver' in window) {
    var clone = detailMain.cloneNode(true);
    var wrap = document.createElement('div');
    wrap.className = 'play-group';
    wrap.setAttribute('data-placement', 'sticky');
    wrap.setAttribute('data-game', detailMain.parentNode.getAttribute('data-game'));
    wrap.appendChild(clone);
    sticky.appendChild(wrap);
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      var past = !e.isIntersecting && e.boundingClientRect.top < 0;
      sticky.classList.toggle('show', past);
      sticky.setAttribute('aria-hidden', past ? 'false' : 'true');
    }).observe(detailMain);
  }

  // GA4: 어떤 게임의 어떤 플랫폼 버튼이 어디서 눌렸는지
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest ? ev.target.closest('.play-btn') : null;
    if (!a || typeof window.gtag !== 'function') return;
    var group = a.closest('.play-group');
    window.gtag('event', 'play_click', {
      game: group ? group.getAttribute('data-game') : '',
      platform: a.getAttribute('data-platform'),
      placement: group ? group.getAttribute('data-placement') : '',
      is_main: a.classList.contains('play-main') ? 'yes' : 'no',
      device_type: device,
      link_url: a.href,
      transport_type: 'beacon'
    });
  });
})();
