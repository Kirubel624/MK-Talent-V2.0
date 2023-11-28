import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/system';
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function ProjectCard() {

    return (
        <Container sx={{ display: "flex", backgroundColor: "#F9F9F9", justifyContent: "center", p: 3 }}>
            <Box>
                <ImageList sx={{borderRadius: 5, width: 600}} variant="standard" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={styles.portfolioImage}>
                            <img 
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                onMouseEnter={(e) => (e.target.nextElementSibling.style.opacity = 1)}
                                onMouseLeave={(e) => (e.target.nextElementSibling.style.opacity = 0)}
                            />
                            <ImageListItemBar
                                sx={styles.portfoioLinkHover}
                                title={item.title}
                                //
                                subtitle={"item.author"}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>

                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

const styles = {

    portfolioImage: {
        '&:hover $portfoioLinkHover': {
            opacity: 1,
            // transition: 'opacity 0.5s ease-in',
        },
    },
    portfoioLinkHover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '75px',
        // backgroundColor: 'red',
        transition: 'opacity 0.5s ease-in-out',
        opacity: 0,
        // opacity: 0,
    },
    textPorfolio: {
        cursor: 'pointer',
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
        position: "relative",
        // borderBottom: "3px solid #000",
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            right: 0,
            borderBottom: '5px solid',
            borderRadius: '20px',
            borderColor: '#000',
            transition: 'width 0.5s ease-in-out', // Add transition properties
            width: '50%', // Set initial width to 0
        },
        '&:hover': {
            '&:before': {
                width: '100%', // Increase width to 100% on hover
            },
        }
    }
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        id: 1,
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        id: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        id: 3,
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        id: 4,
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        id: 5,
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        id: 6,
    },
];