import styles from './Header.module.css'

export const Header = (props) => {
    return (
        <header>
            <div>
                <h2>Текущ потребител:</h2>
                <h2 id="current_logged_user">{props.name}</h2>
            </div>
            <div>
                <div>
                    <button id="user_login_button">Смяна на потребителя</button>
                </div>
                <div id="header_menu_dropdown">
                    <select name="" id="menu">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </header>
    )
}