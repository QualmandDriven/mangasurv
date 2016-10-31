import dispatcher from "../dispatcher";

export function createManga(text) {
  dispatcher.dispatch({
    type: "CREATE_MANGA",
    text,
  });
}

export function deleteManga(id) {
  dispatcher.dispatch({
    type: "DELETE_MANGA",
    id,
  });
}

export function reloadMangas() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_MANGAS"});
  dispatcher.dispatch({type: "RECEIVE_MANGAS", mangas: [
    {
      id: 3,
      name: "Bleach", 
      chapters: 745, 
      followed: false, 
      lastupdate: 123,
      image: "bleach.jpg",
    },
    {
      id: 4,
      name: "Onepunch-Man", 
      chapters: 250, 
      followed: true, 
      lastupdate: 123,
      image: "onepunchman.jpg",
    }
  ]});
}

export function followManga(manga) {
  dispatcher.dispatch({type: "FOLLOW_MANGA", manga});
}

export function unfollowManga(manga) {
  dispatcher.dispatch({type: "UNFOLLOW_MANGA", manga});
}

export function markAsRead(manga) {
  dispatcher.dispatch({type: "MARKASREAD_MANGA", manga});
}