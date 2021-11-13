const TheirMessage = ({ lastMessage, message }) => {
const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

return (
    <div className="message-row">
    {isFirstMessageByUser && (
        <div
        className="message-avatar"
        style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
    )}
    {message.attachments && message.attachments.length > 0
        ? (
        <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
        )
        : (
        <div className="message" style={{ float: 'left',backgroundColor: '#8EC5FC',backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)', marginLeft: isFirstMessageByUser ? '4px' : '48px',borderRadius: '1.3em 1.3em 1.3em .3em' }}>
            {message.text}
        </div>
        )}
    </div>
);
};

export default TheirMessage;