import Script from 'next/script';

const TermlyCookie = () => {
    return (
        <Script type="text/javascript" src={`https://app.termly.io/embed.min.js`} data-auto-block="on" data-website-uuid="ea6e5c02-80b0-427a-bb27-3d4dfa656016" strategy='beforeInteractive'></Script>

    )
};

export default TermlyCookie;
