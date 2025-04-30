import { FooterContainer, FooterLink } from "./styles";

function Footer() {
    return (
        <FooterContainer>
            <p>
                Desenvolvido por Guilherme Rodrigues -{' '}
                <FooterLink href="https://github.com/switq/all-tax-challenge" target="_blank" rel="noopener noreferrer">
                    Repositório
                </FooterLink>
            </p>
        </FooterContainer>
    );
}

export default Footer;

