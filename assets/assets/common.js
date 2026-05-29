(() => {
  const body = document.body;
  const btn = document.querySelector('.hamburger');
  const drawer = document.querySelector('#drawer');
  const closeEls = document.querySelectorAll('[data-close-menu]');
  if (!btn || !drawer) return;

  const open = () => {
    body.classList.add('is-menu-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'メニューを閉じる');
    drawer.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    body.classList.remove('is-menu-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'メニューを開く');
    drawer.setAttribute('aria-hidden', 'true');
  };

  btn.addEventListener('click', () => body.classList.contains('is-menu-open') ? close() : open());
  closeEls.forEach(el => el.addEventListener('click', close));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();


document.getElementById('mG61Hd').addEventListener('submit', function(event) {
  let isValid = true;
  let errorMessage = "";

  // 1. お名前のチェック（空白文字のみを防ぐ）
  const name = document.getElementById('name').value.trim();
  if (name === "") {
    isValid = false;
    errorMessage += "お名前を入力してください。\n";
  }

  // 2. メールアドレスの形式チェック
  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessage += "有効なメールアドレスを入力してください。\n";
  }

  // 3. お問い合わせ内容のチェック
  const message = document.getElementById('message').value.trim();
  if (message.length < 10) {
    isValid = false;
    errorMessage += "お問い合わせ内容は10文字以上で入力してください。\n";
  }

  // バリデーションに失敗した場合、送信をキャンセルする
  if (!isValid) {
    alert(errorMessage); // アラートで通知
    event.preventDefault(); // Googleへの遷移をストップ
  }
});
