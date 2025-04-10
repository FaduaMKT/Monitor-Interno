    function showTab(id) {
      const contents = document.querySelectorAll('.tab-content');
      const buttons = document.querySelectorAll('.tab-buttons button');

      contents.forEach(tab => tab.classList.remove('active'));
      buttons.forEach(btn => btn.classList.remove('active'));

      document.getElementById(id).classList.add('active');
      event.target.classList.add('active');
    }
