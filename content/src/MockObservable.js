/**
  Mock class to mock and observable class.

  @author Joseph Fehrman
  @since 01/03/2017
*/
var MockObservable = function(){
  var subscribers = [];
 
  /**
    Add observer to the list of subscribers.

    @param observer Subscriber to this observable.
  */ 
  function subscribe(observer){
    subscribers.push(observer);
  }

  /**
    Notify the subscribers.

    @param ...args List of arguments.
  */
  function notify(...args){
    // For each observer in the list of subscribers.
    for(var index = 0, length = subscribers.length; index < length; index++){
      // Notify the observer.
      var observer = subscribers[index];
      observer.notify(...args);
    }
  }

  /* Revealing module pattern. */
  return {
    "subscribe" : subscribe,
    "subscribers" : subscribers,
    "notify" : notify
  };
}
