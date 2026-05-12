import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const phoneNumber = '5511999999999'
  const message = 'Olá! Gostaria de agendar uma consulta.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Fale conosco</span>
    </a>
  )
}

export default WhatsAppButton
