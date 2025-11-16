// Элементы DOM
const changeBtn = document.getElementById('change');
const modal = document.getElementById('editModal');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.querySelector('.btn-cancel');
const editForm = document.getElementById('editForm');

// Текущие данные
const currentData = {
    name: "Константин Константинопольский",
    ava: "ссылка",
    age: "100",
    univ: "ВШЭ",
    hobbies: "Игры и др пупупень"
};

// Открытие модального окна
changeBtn.addEventListener('click', () => {
    // Заполняем форму текущими данными
    document.getElementById('editName').value = currentData.name;
    document.getElementById('editAva').value = currentData.ava;
    document.getElementById('editAge').value = currentData.age;
    document.getElementById('editUniv').value = currentData.univ;
    document.getElementById('editHobbies').value = currentData.hobbies;
    
    modal.style.display = 'block';
});

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Закрытие при клике вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Обработка отправки формы
editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Получаем новые данные
    const newName = document.getElementById('editName').value;
    const newAva = document.getElementById('editAva').value;
    const newAge = document.getElementById('editAge').value;
    const newUniv = document.getElementById('editUniv').value;
    const newHobbies = document.getElementById('editHobbies').value;
    
    // Валидация
    if (!newName.trim()) {
        alert('Пожалуйста, введите ФИО');
        return;
    }
    
    if (!newAge || newAge < 0 || newAge > 120) {
        alert('Пожалуйста, введите корректный возраст');
        return;
    }
    
    // Обновляем данные на странице
    document.getElementById('FIO').textContent = newName;
    document.getElementById('ava').textContent = newAva;
    
    // Обновляем таблицу
    const tableRows = document.querySelectorAll('#table tr');
    tableRows[0].querySelector('td:last-child').textContent = newAge + ' лет';
    tableRows[1].querySelector('td:last-child').textContent = newUniv;
    tableRows[2].querySelector('td:last-child').textContent = newHobbies;
    
    // Сохраняем в объект
    currentData.name = newName;
    currentData.age = newAge;
    currentData.univ = newUniv;
    currentData.hobbies = newHobbies;
    
    // Закрываем модальное окно
    closeModal();
    
    // Выводим в консоль для отладки
    console.log('Данные обновлены:', currentData);
});

// Обработка Escape для закрытия модального окна
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});