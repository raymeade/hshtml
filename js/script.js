function filterSchedule(team, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#scheduleBody tr').forEach(row => {
    row.style.display = (team === 'all' || row.dataset.team === team) ? '' : 'none';
  });
}