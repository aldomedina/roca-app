export const removeRepeatedObj = arr =>
  arr.filter((el, index) => {
    const _thing = JSON.stringify(el);
    return (
      index ===
      arr.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      })
    );
  });

export const vibrate = time =>
  !!window.navigator.vibrate && window.navigator.vibrate(time ? time : 50);
