export const fetchUser = () => fetch("/current-user").then(res => res.json());
