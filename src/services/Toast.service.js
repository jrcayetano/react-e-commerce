export const generateToast = (message, isError = false) => {
  return {
    title: isError ? "Error" : "Éxito",
    message: message,
    color: isError ? "bg-error" : "bg-success",
    isError: isError,
  };
};
