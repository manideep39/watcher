window.addEventListener("blur", () => console.log("moved"));
chrome.storage.local.set({ count: 0, flag: false });

window.addEventListener("blur", () => {
  chrome.storage.local.get(["count"], (result) => {
    if (result.count < 3) {
      const newCount = result.count + 1;
      alert(`You have moved from the OJ: ${newCount}`);
      chrome.storage.local.set({ count: newCount });
    } else {
      console.log("end the test");
      window.location.href = "https://www.w3schools.com/";
      location.chrome.storage.local.set({ count: 0 });
    }
  });
});
