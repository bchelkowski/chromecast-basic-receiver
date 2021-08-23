const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

export default function () {
  const loadRequestData = new cast.framework.messages.LoadRequestData();
  const media = new cast.framework.messages.MediaInformation();
  media.contentUrl = 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd';
  media.contentType = 'application/dash+xml';
  media.metadata = {
    title: 'TITLE',
    subtitle: 'subtitle',
  };

  playerManager.load({
    ...loadRequestData,
    autoplay: true,
    media,
  });
};
