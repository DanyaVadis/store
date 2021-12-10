const initialState = {
    list: [
        {
            label: 'Бренды',
            path: '/'
        },
        {
            label: 'Сервис',
            path: '/'
        },
        {
            label: 'Услуги',
            path: '/'
        },
        {
            label: 'Поддержка',
            path: '/'
        },
        {
            label: 'О компании',
            path: '/'
        },
        {
            label: 'Блог',
            path: '/'
        },
        {
            label: 'Где купить',
            path: '/'
        },
        {
            label: 'Контакты',
            path: '/'
        }
    ]
}

function headerNav(state = initialState, action) {
    return state
}
export default headerNav;