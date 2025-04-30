import styled from 'styled-components';

const FooterContainer = styled.footer`
        background-color: #3b69b9;
        color: white;
        text-align: center;
        padding: 1rem 0;
        align-items: stretch;
        width: 100%;
    `;

const FooterLink = styled.a`
        color: #ffffff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    `;

function Footer() {
    return (
        <FooterContainer>
            <p>
                Desenvolvido por Guilherme Rodrigues -{' '}
                <FooterLink href="https://github.com/guilherme-rodrigues" target="_blank" rel="noopener noreferrer">
                    GitHub
                </FooterLink>
            </p>
        </FooterContainer>
    );
}

export default Footer;

