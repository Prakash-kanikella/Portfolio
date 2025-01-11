function showContent(jobId) {
    // Hide all job descriptions
    document.querySelectorAll('.job').forEach(job => {
      job.style.display = 'none';
    });

    // Show the selected job description
    document.getElementById(jobId).style.display = 'block';
  }

  // Show Yokohama MNC content by default
  document.addEventListener('DOMContentLoaded', () => {
    showContent('yokohama');
  });