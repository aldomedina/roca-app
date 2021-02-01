import styled from "styled-components";

export const Box2x2 = styled.div`
  width: 20vw;
  height: 20vw;
  ${({ theme, borderLeft }) =>
    !!borderLeft && "border-left: 2px solid" + theme.colors[borderLeft]}
`;

export const Box10vw = styled.div`
  ${({ w }) => `width: ${10 * w}vw`};
  ${({ h }) => `height:${10 * h}vw`};
  ${({ mh }) => `min-height:${10 * mh}vw`};
  background-color: ${({ theme, color }) => theme.colors["light" + color]};
  border: solid ${({ theme, color }) => theme.colors[color]};
  border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : 0)};
`;

export const PatternBox = styled.div`
  background-color: ${({ theme, color }) => theme.colors["light" + color]};
  background-image: ${({ theme, color }) =>
    `url("data:image/svg+xml,%3Csvg width='50' height='10' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23${
      theme.colors[color].split("#")[1]
    }' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`};
`;
// bambu
// export const PatternBox = styled.div`
// background-color: #d9d6ea;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23073cd3' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
// `
// ondas
// ojos
// export const PatternBox = styled.div`
//  background-color: #d9d6ea;
//  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23073cd3' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
// `
