document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.table__status').forEach(item => {
        if(item.textContent.includes('Active')) {
            item.classList.remove('active');
        }
      });
})