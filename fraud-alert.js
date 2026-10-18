(() => {


  const dialog = document.createElement('dialog');
  dialog.className = 'fraud-alert';
  dialog.setAttribute('aria-labelledby', 'fraud-alert-title');
  dialog.innerHTML = `<div class="fraud-alert-stripe" aria-hidden="true"></div>
    <button class="fraud-alert-close" type="button" aria-label="Close fraud alert">×</button>
    <div class="fraud-alert-body">
      <p class="fraud-alert-kicker">UR MOM LEAGUE · EMERGENCY BROADCAST</p>
      <div class="fraud-alert-siren" aria-hidden="true">🚨</div>
      <h2 id="fraud-alert-title">FRAUD<br>ALERT!</h2>
      <p class="fraud-alert-stamp">TONY ZU IS ON FRAUD WATCH</p>
      <a class="fraud-alert-go" href="/fraud/">TAKE ME TO FRAUD WATCH <span aria-hidden="true">↗</span></a>
      <button class="fraud-alert-dismiss" type="button">I'll take my chances</button>
    </div><div class="fraud-alert-stripe" aria-hidden="true"></div>`;
  document.body.append(dialog);

  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));


  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const showAlert = () => {
    if (!dialog.open) dialog.showModal();
    try { localStorage.setItem('zutony-fraud-alert-day', today); } catch {}
  };
  const replay = document.createElement('button');
  replay.className = 'fraud-alert-replay';
  replay.type = 'button';
  replay.textContent = '🚨 Fraud alert';
  replay.addEventListener('click', showAlert);
  document.querySelector('footer').append(replay);
  let seenToday = false;
  try { seenToday = localStorage.getItem('zutony-fraud-alert-day') === today; } catch {}
  if (!seenToday) showAlert();
})();



