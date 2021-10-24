import input from '../../../modules/input/input';

const tmpl = `
    <div class="chats__form-container">
        <form action="" method="post" class="chats__form">
            <button class="chats__form-attach-button" type="button"></button>
            <input class="chats__form-input" id="message" type="text" name="message" value={{ message }}>
            <button class="chats__form-send-button" type="button"></button>
        </form>
    </div>
`;

export default tmpl;