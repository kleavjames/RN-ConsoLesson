export const onStartScroll = (event, show, hide) => {
  let offset = 0;
  const currentOffset = event.nativeEvent.contentOffset.y;
  const diff = currentOffset - (offset || 0);

  if (diff <= 0) {
    show();
  } else {
    hide();
  }

  offset = currentOffset;
};
