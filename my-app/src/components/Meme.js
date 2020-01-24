import React from 'react';
import { connect } from 'react-redux';
import { fetchMeme } from '../actions/index';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const MemeImg = styled.img`
    box-shadow: 0 0 10px;
`

const MemeButton = styled.button`
    margin: 2% 0;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
`

const Meme = props => {
    return (
        <FlexDiv>
            <MemeButton onClick={props.fetchMeme} >Get Meme</MemeButton>
            {(props.meme === undefined) && !props.isLoading && (<h2>Click to find out!</h2>)}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            {!(props.meme === undefined) && !props.isLoading && (<MemeImg src={props.meme[Math.floor(Math.random() * props.meme.length)].url} />)}
        </FlexDiv>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        meme: state.meme,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchMeme })(Meme);