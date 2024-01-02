function checkSpam(text) {
  return text.replace(/viagra|xxx/gi, "***");
}

export { checkSpam };
