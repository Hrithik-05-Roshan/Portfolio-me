const API_BASE = "https://portfolio-backend-c6ui.onrender.com";

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ⛔ stops page reload

    const data = {
      name: form.elements[0].value,
      email: form.elements[1].value,
      message: form.elements[2].value,
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  });
}
