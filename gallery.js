const photoLinks = document.querySelectorAll('[data-gallery]');
if (photoLinks.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'photo-dialog';
  dialog.setAttribute('aria-label','Enlarged car photograph');
  dialog.innerHTML = '<img alt=""><button type="button" aria-label="Close enlarged photograph">Close ×</button>';
  document.body.append(dialog);
  const image = dialog.querySelector('img');
  let opener;
  photoLinks.forEach(link => link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    opener=link;
    image.src=link.href;
    image.alt=link.querySelector('img')?.alt || 'Front three-quarter view of the car';
    dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>opener?.focus());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
}
