import React, { useEffect } from 'react';

const Snowfall = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            createSnowflake(event.clientX, event.clientY);
        };

        const createSnowflake = (x, y) => {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";
            snowflake.style.left = `${x}px`;
            snowflake.style.top = `${y}px`;

            // Add random size and speed for variety
            const size = Math.random() * 8 + 2;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            const duration = Math.random() * 3 + 2;
            snowflake.style.animationDuration = `${duration}s`;

            document.body.appendChild(snowflake);

            // Remove the snowflake after it falls
            setTimeout(() => {
                snowflake.remove();
            }, duration * 1000);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return null;
};

export default Snowfall;
