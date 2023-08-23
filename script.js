function storeData() {
  const data = document.getElementById('data').value;

  if (data.startsWith("ft")) {
    let existingData = localStorage.getItem('storedData');
    existingData = existingData ? JSON.parse(existingData) : [];

    existingData.push(data);
    localStorage.setItem('storedData', JSON.stringify(existingData));

    alert('Data stored successfully!');
  } else {
    alert('Data must start with "ft" to be stored.');
  }
}

function updateLatestData() {
  const latestDataList = document.getElementById('latestDataList');

  const data = localStorage.getItem('storedData');

  if (data) {
    const dataList = JSON.parse(data);
    const lastTenData = dataList.slice(-10); // Retrieve the last 10 data entries
    latestDataList.innerHTML = lastTenData.map(item => `<li>${item}</li>`).join('');
  } else {
    latestDataList.innerHTML = 'No data found!';
  }
}

// Initial update
updateLatestData();

// Periodically update every 5 seconds (adjust as needed)
setInterval(updateLatestData, 5000);
