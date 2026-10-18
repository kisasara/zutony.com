(() => {
  const key = 'zutony-fraud-alert-seen';
  try { if (sessionStorage.getItem(key)) return; } catch {}
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
      <a class="fraud-alert-go" href="receipts.html">TAKE ME TO FRAUD WATCH <span aria-hidden="true">↗</span></a>
      <button class="fraud-alert-dismiss" type="button">I'll take my chances</button>
    </div><div class="fraud-alert-stripe" aria-hidden="true"></div>`;
  document.body.append(dialog);
  const remember = () => { try { sessionStorage.setItem(key, '1'); } catch {} };
  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('close', remember);
  dialog.querySelector('a').addEventListener('click', remember);
  dialog.showModal();
})();
