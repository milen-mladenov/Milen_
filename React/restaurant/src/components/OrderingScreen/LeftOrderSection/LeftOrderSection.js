import styles from './LeftOrderSection.module.css'
import { sectionButtons } from '../../utility/filters';
import { SectionButton } from './SectionButton/SectionButton';
import { ItemButtons } from './ItemButtons/ItemButtons';

export const LeftOrderSection = () => {
    let tableNumber = 5;
    return (
        <section id="orders_section">

        <div id="order_section_action_type">
            <h2 id="order_section_action">Въведи поръчка за маса:</h2>
            <h2 class="current_table_number">{tableNumber}</h2>
        </div>
        <div id="order_section_buttons">
            <SectionButton info={sectionButtons.itemButtons}/>
            <SectionButton info={sectionButtons.keypad}/>
        </div>
        <div id="ordering_section">

        <ItemButtons />

            <div id="order_section_keypad" data-order-section-status="inactive">
                <button class="keypad_button" id="key_1" value="1">1</button>
                <button class="keypad_button" id="key_2" value="2">2</button>
                <button class="keypad_button" id="key_3" value="3">3</button>
                <button class="keypad_button" id="key_4" value="4">4</button>
                <button class="keypad_button" id="key_5" value="5">5</button>
                <button class="keypad_button" id="key_6" value="6">6</button>
                <button class="keypad_button" id="key_7" value="7">7</button>
                <button class="keypad_button" id="key_8" value="8">8</button>
                <button class="keypad_button" id="key_9" value="9">9</button>
                <button class="keypad_button" id="key_0" value="0">0</button>
                <button class="keypad_button" id="key_enter" value="enter">ENTER</button>
                <button class="keypad_button" id="key_return" value="return">RETURN</button>
            </div>

        </div>
        <div id="orderdered_items">
            <div id="order_table_top">
                <div id="table_name">
                    <h2 id="selected_table_number">Поръчка за маса:</h2>
                    <h2 id="selected_table_name"></h2>
                </div>
                <div id="table_amount">
                    <h2 id="selected_table_total_amount">82.55</h2>
                    <h3 id="currency_type">лв.</h3>
                </div>
            </div>
            <table id="order_table">
                <tr id="order_table_head">
                    <th>
                        <p>коментар</p>
                    </th>
                    <th>
                        <p>име артикул</p>
                    </th>
                    <th>
                        <p>поръчани</p>
                    </th>
                    <th>
                        <p>добави</p>
                    </th>
                    <th>
                        <p>ед. сума</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value="Бира"/></td>
                    <td>
                        <p>3</p>
                    </td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>&#128172;</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value="Салата"/></td>
                    <td>
                        <p>1</p>
                    </td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>+</p>
                    </td>
                    <td><input class="ordered_item" type="text" placeholder="Име / Номер" value=""/></td>
                    <td></td>
                    <td>
                        <div class="order_number"><button>-</button><input type="number"
                                max="999"/><button>+</button></div>
                    </td>
                    <td>
                        <p>..</p>
                    </td>
                </tr>
            </table>
        </div>
        <button id="send_order_button" disabled>Поръчай</button>
    </section>
    )
}