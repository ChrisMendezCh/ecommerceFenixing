"use client";
import { useEffect, useRef, useState } from "react";

const QUESTIONS = [
  { q: "servicio", a: "Ofrecemos servicio técnico, postventa, garantía, diseño e ingeniería de elevación, certificaciones y capacitaciones." },
  { q: "ubicados", a: "Nuestra oficina principal está en Quito, Ecuador, pero atendemos a todo el país y Latinoamérica." },
  { q: "cotización", a: "Puedes solicitar una cotización desde nuestro formulario de contacto o escribiéndonos por WhatsApp." },
  { q: "marcas", a: "Representamos marcas líderes en el sector de elevación industrial. Consulta nuestra sección de marcas para más información." },
  { q: "cobertura", a: "Sí, brindamos cobertura en todo el Ecuador." },
  { q: "capacitación", a: "Sí, contamos con programas de capacitación y certificación para operadores." },
  { q: "repuestos", a: "Sí, tenemos stock de repuestos y puedes adquirirlos contactándonos directamente." },
  { q: "emergencias", a: "Sí, nuestro servicio técnico está disponible para emergencias industriales." },
  { q: "garantía", a: "La garantía depende del producto, pero siempre ofrecemos garantía original de fábrica." },
  { q: "pago", a: "Aceptamos transferencias bancarias y otros métodos según el acuerdo comercial." },
  // Puedes agregar más palabras clave y respuestas aquí
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola, soy Fenixing 🦸🏻‍♂️​ ¿En qué te puedo ayudar?" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // Scroll automático al enviar mensaje
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Buscar respuesta por palabra clave
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    const found = QUESTIONS.find(q =>
      input.toLowerCase().includes(q.q)
    );
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        {
          from: "bot",
          text: found
            ? found.a
            : "Lo siento, no tengo una respuesta para esa palabra. ¿Puedes intentar con otra?"
        }
      ]);
    }, 700);
    setInput("");
  };

  // Sugerencias rápidas
  const handleQuick = (q: string) => {
    setInput(q);
    setTimeout(handleSend, 200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      {!open && (
        <button
          className="bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl hover:scale-110 transition"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
        >
          🤖
        </button>
      )}

      {/* Ventana de chat */}
      {open && (
        <div className="w-80 h-[420px] bg-white border border-primary rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold">Fenixing ChatBot</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl font-bold hover:text-gray-200" aria-label="Cerrar chat">×</button>
          </div>
          {/* Mensajes */}
          <div ref={chatRef} className="flex-1 px-4 py-2 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                    msg.from === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* Sugerencias rápidas */}
          <div className="flex flex-wrap gap-2 px-3 pb-2">
            {QUESTIONS.slice(0, 4).map((q, i) => (
              <button
                key={i}
                className="bg-primary/10 text-primary text-xs rounded-full px-3 py-1 hover:bg-primary/20 transition"
                onClick={() => handleQuick(q.q)}
              >
                {q.q.charAt(0).toUpperCase() + q.q.slice(1)}
              </button>
            ))}
          </div>
          {/* Input */}
          <div className="flex border-t border-gray-200 bg-white">
            <input
              className="flex-1 px-3 py-2 outline-none text-sm text-black bg-white"
              type="text"
              placeholder="Escribe una palabra clave (ej: servicio, garantía...)"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              autoFocus
            />
            <button
              className="bg-primary text-white px-4 py-2 rounded-r-xl hover:bg-primary/90 transition"
              onClick={handleSend}
              aria-label="Enviar"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}