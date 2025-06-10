const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('modalClose');
const backdrop = modal.querySelector('.modal-backdrop');

document.querySelectorAll('.product').forEach(prod => {
  prod.addEventListener('click', () => {
    const img = prod.getAttribute('data-img');
    modalImg.src = img;
    modal.classList.add('active');
  });
});

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => { modalImg.src = '' }, 250);
}
closeBtn.onclick = closeModal;
backdrop.onclick = closeModal;
window.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
});
