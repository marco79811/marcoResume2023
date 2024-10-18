document.addEventListener('DOMContentLoaded', function() {
    // 工作詳情切換功能
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                this.textContent = 'Show Details';
            }
        });
    });

    // 技能過濾功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCategories = document.querySelectorAll('.skill-category');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            skillCategories.forEach(category => {
                if (filter === 'all' || category.getAttribute('data-category') === filter) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
            // 更新活動的過濾按鈕
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // 平滑滾動功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 滾動到頂部按鈕功能
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 頁面元素淡入動畫
    const fadeInElements = document.querySelectorAll('.job-card, .education');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'show');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
