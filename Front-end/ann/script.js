document.addEventListener("DOMContentLoaded", function () {
    // Sample announcements (you can replace this with your own data)
    const announcements = [
        "New fitness classes added!",
        "Special discount for members in November!",
        "Holiday schedule: Open on Thanksgiving.",
    ];

    const announcementList = document.getElementById("announcement-list");

    // Populate the announcement list with the sample announcements
    announcements.forEach((announcement) => {
        const li = document.createElement("li");
        li.textContent = announcement;
        announcementList.appendChild(li);
    });
});
