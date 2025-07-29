const form = document.getElementById("lead-form");
const msg = document.getElementById("response-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    plan: form.plan.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://agricomm-backend.up.railway.app/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      msg.textContent = "✅ Enviado correctamente. ¡Gracias!";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "❌ Error al enviar. Intentá nuevamente.";
      msg.style.color = "red";
    }
  } catch (error) {
    msg.textContent = "⚠️ No se pudo conectar con el servidor.";
    msg.style.color = "orange";
  }
});
