import Link from 'next/link'
import './Footer.sass'

export function Footer() {
    return (
        <footer className="footer_container" >
            <Link href="#" className="footer_backtotop_bar">
                Voltar ao início
            </Link>

            <div className="footer_actions">
                <h3>Populando Dados</h3>

                <Link href="#" target="_blank" rel="noopener noreferrer"
                    className="footer_option">
                    Crie um Vendedor
                </Link>

                <Link href="#" target="_blank" rel="noopener noreferrer"
                    className="footer_option">
                    Crie um Produto
                </Link>
            </div>
        </footer>
    )
}