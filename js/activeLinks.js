document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname;

     document.querySelectorAll('.navbar__item').forEach(item => {
      item.classList.remove('current');
    });
   
  if (currentPage.includes('index.html')) {
      document.querySelector('#dashboard-link').classList.add('current');
    } else if (currentPage.includes('product.html')) {
      document.querySelector('#product-link').classList.add('current');
    } else if (currentPage.includes('customers.html')) {
      document.querySelector('#customer-link').classList.add('current');
    } else if (currentPage.includes('income.html')) {
      document.querySelector('#income-link').classList.add('current');
    } else if (currentPage.includes('promote.html')) {
      document.querySelector('#promote-link').classList.add('current');
    } else if (currentPage.includes('help.html')) {
      document.querySelector('#help-link').classList.add('current');
    } else {
      document.querySelector('#dashboard-link').classList.add('current');
    }
});