import loadExample from './loadExample';
import playerOptions from './playerOptions';

const context = cast.framework.CastReceiverContext.getInstance();

context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);

context.start(playerOptions);

loadExample();
