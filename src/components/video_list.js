import * as React from "react";
import { VideoListItem } from "./video_list_item";

export const VideoList = (props) => {
	return <ul className="col-md-4 list-group">
		{
			props.videos.map(v => {
				return <VideoListItem onVideoSelect={props.onVideoSelect} video={v} key={v.etag}></VideoListItem>
			})
		}
	</ul>;
};
