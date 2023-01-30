import { INFLUENCERS } from "../../app/shared/INFLUENCERS";

export const selectAllInfluencers = () => {
    return INFLUENCERS;
};

export const selectInfluencerById = (id) => {
    return INFLUENCERS.find((influencer) => influencer.id === parseInt(id));
};

export const influencersByDateAdded = () => {
    return INFLUENCERS.sort((a,b) => a.dateAdded - b.dateAdded);
}

export const influencersByPopularity = (subCount) => {
    return INFLUENCERS.sort((a,b) => (b.youtubeSubCount + b.twitterSubCount) - (a.youtubeSubCount + a.twitterSubCount));
}