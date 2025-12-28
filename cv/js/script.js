const projectsData = [
    {
        id: 1,
        title: "Traditional Feast Order Management",
        shortDesc: "Hệ thống quản lý đặt tiệc Java Swing & MySQL.",
        longDesc: "Ứng dụng giúp quản lý khách hàng, thực đơn và quy trình đặt tiệc. Hệ thống hỗ trợ tính toán chi phí tự động, quản lý trạng thái đơn hàng và xuất báo cáo. Tập trung vào xử lý nghiệp vụ backend và tương tác JDBC tối ưu.",
        tech: ["Java", "MySQL", "JDBC", "Swing"],
        github: "https://github.com/tennyhoang/TraditionalFeastOrderManagement",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Thay bằng link video thật của bạn
    },
    {
        id: 2,
        title: "Room Management Module",
        shortDesc: "Quản lý khách sạn/resort hiệu quả.",
        longDesc: "Module tập trung vào việc xử lý logic kiểm tra phòng trống (Availability), đặt phòng (Booking) và quản lý thông tin khách hàng. Áp dụng mô hình MVC để tách biệt dữ liệu và giao diện.",
        tech: ["Java Core", "OOP", "MVC"],
        github: "https://github.com/tennyhoang/RoomManagementModule",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Logic
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 2. Render Projects ra Grid
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsData.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in'; // Dùng đúng class project-card
            card.innerHTML = `
                <div class="project-img" style="display: flex; align-items: center; justify-content: center; background: var(--primary); color: white; font-weight: bold;">
                    <i class="fab fa-java fa-3x"></i>
                </div>
                <div class="project-info">
                    <h3>${p.title}</h3>
                    <p>${p.shortDesc}</p>
                    <div style="margin-top: 1rem;">
                        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `;
            card.onclick = () => openModal(p);
            projectsGrid.appendChild(card);
        });
    }

    // 3. Modal Logic
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');

    window.openModal = (project) => {
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <h2 style="margin-bottom: 10px;">${project.title}</h2>
            <div style="margin-bottom: 20px;">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <p style="margin-bottom: 20px; line-height: 1.8;">${project.longDesc}</p>
            <div class="video-container">
                <iframe src="${project.video}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div style="margin-top: 20px;">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View Source Code
                </a>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Chặn cuộn trang khi mở modal
    };

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('modal-body').innerHTML = ''; // Xóa video khi đóng để dừng nhạc
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('modal-body').innerHTML = '';
        }
    };
});