import ReactTypingEffect from 'react-typing-effect';

function Login({ title, description }) {
    return (
        <ReactTypingEffect
        text={[title, description]}
        speed={100}
        typingDelay={100}
        eraseDelay={800}
        eraseSpeed={100}
      />
    )
}

export default Login