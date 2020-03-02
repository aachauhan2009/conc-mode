
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        return result;
      } else if (status === 'success') {
        return result;
      }
      return null;
    },
  };
}

export function getData(n = 42) {
  return wrapPromise(fetch(`http://numbersapi.com/${n}`).then((data) => data.text()));
}

async function getDogPicUrl() {
  const data = await fetch('https://random.dog/woof.json');
  const { url } = await data.json();
  if (url.includes('mp4') || url.includes('gif')) {
    return getDogPicUrl();
  }
  return url;
}

async function dogPic() {
  const url = await getDogPicUrl();
  const pic = await fetch(url);
  const picBlob = await pic.blob();

  return { src: URL.createObjectURL(picBlob), type: picBlob.type };
}

export function getDogPic() {
  return wrapPromise(dogPic());
}
