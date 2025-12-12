// مجرد رسائل تأكيد عند الإرسال
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", () => {
    alert("✅ تم إرسال النموذج بنجاح! الطلب هيوصل لإيميلك عبر Formspree.");
  });
});