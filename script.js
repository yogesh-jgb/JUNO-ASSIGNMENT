document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('trig1');
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.style.display='none';
  dropdownButton.addEventListener('click', function () {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });
  window.addEventListener('click', function (event) {
      if (!event.target.matches('#trig1')) {
          dropdownContent.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('risk1');
  const dropdownContent1 = document.getElementById('dropdownContent1');
  dropdownContent1.style.display='none';
  dropdownButton.addEventListener('click', function () {
      dropdownContent1.style.display = (dropdownContent1.style.display === 'block') ? 'none' : 'block';
  });
  window.addEventListener('click', function (event) {
      if (!event.target.matches('#risk1')) {
          dropdownContent1.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const riskLevelButtons = document.querySelectorAll('.dropdown-content a');
  const tableRows = document.querySelectorAll('tbody tr');
  const noDataFoundMessage = document.getElementById('noDataFound');
  let hasMatchingRow = false;
  riskLevelButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedRiskLevel = button.textContent.toLowerCase();
      for (const row of tableRows) {
        const riskLevel = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (selectedRiskLevel === 'all' || selectedRiskLevel === riskLevel) {
          row.style.display = '';
          hasMatchingRow = true;
        } else {
          row.style.display = 'none';
        }
      }
      if (!hasMatchingRow) {
        noDataFoundMessage.style.display = 'block';
      } else {
        noDataFoundMessage.style.display = 'none';
      }
    });
  });
});
function toggleIcon() {
  var icon = document.getElementById('trig1');
  if (icon.classList.contains('fa-chevron-down')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
  } else if (icon.classList.contains('fa-chevron-up')) {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
  } else {
      icon.classList.add('fa-chevron-down');
  }
}
function toggleIcon1() {
  var icon = document.getElementById('risk1');
  if (icon.classList.contains('fa-chevron-down')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
  } else if (icon.classList.contains('fa-chevron-up')) {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
  } else {
      icon.classList.add('fa-chevron-down');
  }
}
function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
}
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}
document.getElementById('comp').addEventListener('click', function() {
    window.location.href = 'completed.html';
  });
  document.getElementById('pon').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  function displayNewContent() {
    const newContentDiv = document.getElementById('newContent');
    newContentDiv.innerHTML = '<p>This is the new content!</p>';
  }
const completedTextElement = document.getElementById('comp');
const pendingTextElement = document.getElementById('pon');
    completedTextElement.addEventListener('click', () => {
      completedTextElement.style.color = 'blue';
      completedTextElement.style.textDecoration = 'underline';
      pendingTextElement.style.color = 'white';
      pendingTextElement.style.textDecorationColor = 'transparent';
    });
    pendingTextElement.addEventListener('click', () => {
      pendingTextElement.style.color = 'blue';
      pendingTextElement.style.textDecoration = 'underline';
      completedTextElement.style.color = 'black';
      completedTextElement.style.textDecorationColor = 'transparent';
    });
    const checkbox = document.getElementById('close-fee');
const button = document.getElementById('btn');
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    button.style.backgroundColor = '#4643EE';
  } else {
    button.style.backgroundColor = '';
  }
});
const resetIcon = document.getElementById('ico');
const form = document.getElementById('myform');

resetIcon.addEventListener('click', () => {
  form.reset();
  button.style.backgroundColor = '';
});
const jsonData = [
    {"user": "Sam Altman <br>samaltman123@gmail.com", "Risk": "Medium", "Triger": "IP Change","Queue":"4 days","Date":"12 Oct,2023","Previous":"Yes <br> 23 Aug,2023"},
    {"user": "Sameer Choubey<br>sameerchoubey123@gmail.com", "Risk": "High", "Triger": "FIFO","Queue":"4 days","Date":"12 Oct,2023","Previous":"No"},
    {"user": "Adarsh Panikkar<br>adarsh@onjuno.com", "Risk": "Low", "Triger": "IP Change","Queue":"5 days","Date":"12 Oct,2023","Previous":"No"},
    {"user": "Pratik Shetty <br>pratik3@gmail.com", "Risk": "High", "Triger": "FIFO","Queue":"5 days","Date":"12 Oct,2023","Previous":"Yes <br> 12 Sep,2023"},
    {"user": "Elon Musk <br>elon@twitterceo.com", "Risk": "Low", "Triger": "FIFO","Queue":"5 days","Date":"12 Oct,2023","Previous":"Yes <br> 12 Sep,2023"},
    {"user": "Trina Kundu <br>trina@onjuno.com", "Risk": "Low", "Triger": "FIFO","Queue":"5 days","Date":"12 Oct,2023","Previous":"Yes <br> 12 Sep,2023"}
];
function populateTable(data) {
    const tableBody = document.querySelector('#mytable tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td><div style="display: flex; justify-content: space-between; align-items: center; gap: 10px display: inline-flex">
        <p style="width: fit-content">${item.user}</p>
        <a href="#" id="use" style="display: inline-block;"><i class="fa-solid fa-arrow-up-right-from-square" style="color:#4643EE;"></i></a>
    </div></td><td><i class="your-icon-class" style="display: inline-block;margin-right:5px; width: 10px; height: 10px;color:${getColorByRisk(item.Risk)}; background-color: ${getColorByRisk(item.Risk)};border-radius: 50%"></i>${item.Risk}</td><td>${item.Triger}</td><td>${item.Queue}</td><td>${item.Date}</td><td>${item.Previous}</td>`;
        tableBody.appendChild(row);
    });
}
function getColorByRisk(risk) {
    switch (risk.toLowerCase()) {
      case 'low':
        return '#006540';
      case 'medium':
        return '#88670F'; 
      case 'high':
        return '#7D2424';
    }
  }
function filterData(searchTerm) {
    const filteredData = jsonData.filter(item =>
        item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Risk.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Triger.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Queue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Previous.toLowerCase().includes(searchTerm.toLowerCase())
    );
    populateTable(filteredData);
}
populateTable(jsonData);
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterData(this.value);
});
document.addEventListener('DOMContentLoaded', function () {
  var redirectButton = document.getElementById('btn');
  redirectButton.addEventListener('click', function () {
      window.location.href = 'index.html';
  });
});