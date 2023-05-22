import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % heroData.length);
    }, 5000); // Set the desired interval in milliseconds (e.g., 3000 for 3 seconds)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [heroData.length]);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            We are Southeast Vaults & Storage: Protecting Your Valuables.
          </h1>
          <HeaderP className="font13 semiBold">
            Protect Your Valuables with Southeast Vault & Storage When it comes
            to storing your most valuable possessions, trust is key. At
            Southeast Vault & Storage, we offer a range of secure storage
            solutions, including deposit safe boxes, vaults, and air cargo
            services, to meet your unique needs. Our state-of-the-art facilities
            are equipped with high-security locks, climate control technology,
            fire and flood protection, and 24/7 monitoring, ensuring that your
            items are protected around the clock. Contact us today to learn more
            about how we can help you keep your valuables safe and secure.{" "}
          </HeaderP>
          {/* <BtnWrapper>
            <FullButton to='contact' title="Get Started" />
          </BtnWrapper> */}
          <Link
            activeClass="active"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
          >
            <BtnWrapper>
              <FullButton title="Get Started" />
            </BtnWrapper>
          </Link>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius88"
            src={heroData[index].img}
            alt="office"
            style={{
              zIndex: 9,
              // opacity: index === 0 ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>{heroData[index].text}</em>
              </p>
              {/* <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Ralph Waldo Emerson
              </p> */}
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const heroData = [
  {
    img: "https://www.firefightermovers.com/wp-content/uploads/2018/05/IMG_4476-1-1024x683.jpg",
    text: "Unlock Peace of Mind. Entrust Your Belongings to Southeast Vaults – Where Security Meets Excellence.",
    person: "",
  },
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhoYHBoaHR4fHBwcGBgaGhwaHhocIy4lHB4rIRgaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKoBKQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAD0QAAEDAQUFBgUDAwMEAwAAAAEAAhEDBBIhMUFRYXGBkQUTIqGx8AYyQsHRFFLhYrLxFXKCIzOi0wfC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAQMEAgEEAwAAAAAAAAABAhEhAxIxBBNBUWFxkSKBobEUMsH/2gAMAwEAAhEDEQA/APYMemKb0oxvE8E5RpTr1CHJEqLDsqIzCCqMspRadIhS5ItRZcUJyIVbhGGSI0FHLQRBx4YEKHIpRFhLcc+CbYwkTlI94KjbM3+ryTIw1JU3ZTS8GXarA44iDwSTbE7XBegLTnKjHaCgLMz9A+7i4QpZ2QMy7otK+UJxVIlnULI1owxStaxZk47M5R4/qKkuIxBJG9OhCNOi0CcQfMK7KF7+QUw+s5UdVKdMmygsWGJlR+mZvVhXhUNcbE0mJtBHUGjEDhqs+00yPqdjpCb/AFO4dVSq+dB1SpjtGS8OnxXjuVTRe7ACB0WnSeTkAOal1Q7PWFVtCwzFex7Tl5yh1e8OhK2S9xwuBDuv2RwRuFRhdzU/YeiI2nVnFvktsh2WPGUF9nJ1PVPcLbRliyPzIhHpWX912PPyTJsu9D7niru/IqrwBdZBJiI4qrrKmQzeuulFsVIUNkUCyk5BOGVQko3MVIW/RnO6pFnOwdEYuKhzztQ3Ia2gC1w+kID2nYOiZcShOKKCxR9JV7lMOcuvJis9DS4JtrzsWMy0FuCY/VcDzXIztUTUa553I7WO1KymW0DU+f3WjQtrD9Q5lS2PaNMkDRXaCqU3NORHIphjEkxPBzQVYzsRAd4VwFpFWZuQs5pKEWlPQhvAQ4tDUhNyG5yLUrAaTySz6hd9JPCUky6sq98IffLjfyDDzj7lVNN5EXGjeXfYK0yJRLXxqqmuBqVQdnPOb28pVW9mOGbgeEq04mbiyX2qUF9pnRMGwtChtlancSWpCoeNh6/wrXhs8ym/0rdoXdzGxG5C2sUA2T1K4zvTUkKhrJWOhQgqQTvRzXVRUJTtiwCk7CojcUYvOWKi/wAUWAAt3KLiZc8bR1QTVARYUUuFdcK51U+4Ve/AzzTtipE92uuAZjql32kanoobaW7SnTBNBntGxBe1cbQDt6oLq86JpMTaJLVQsXMequeT+UZFgo8AZwFHeM3eaHUo71TuRsTCyG2pyKKxOYlNCwbwhssZJcGvLS0gYgOBlodOOMYxmMly74npLTkBfWAExuA2k6I7HoVgoue8l4bfpktuiS3HC+JiSYI3QRqVpfpJ06JSnFFRiwDKrgm6dueMnHqqsskZzyTNKxg6lZynEtR9jNnt7yIJ3jAZ75Wox1RzcHtngs2nYhtKepMu6qFPODOcY+P6DMFYDNrjsP5RalZwHygnXGPVDdUG1Ar1y0FwkgCS3UgZwTkfXzWnc9GO32gNbtWDF0jigu7XB+nr/hNObePiAA2Zk8TpwHVQLO0YCISUvZpUfQAdrsjEYojbYxwkHkufQadBgoFIDKPJaJozaLG1AaoLu0WbfJDtLGGAcyQNYzxmMBhOaG+wM2eq0VeSGn4CP7QZv8lwtzIxPKEs7s0e5/KC+xgaHlKpKJD3DotbT9UKlWq3R6UFBuePmp7pu0++Ke1E2y7qkCZ+6UqWonN3KExdn6vTZKC+zjUTyVJImVixtTtoVmW86weSubK3Z6qDY27D1V4M6kRUt52+aXdaXfuKObE3Yeq79C0bU0ooT3MVvnVyI61HKMEf9G3YiNsw2J/pFUhSnVnPqmO8BzBV+5Gg6rnMdpCGkwtoVe+TjiuawHQhFNN+1DdQeqSRDkwl1uxVc9owAxQjZ3b1HcHaUbF7De/Re/uUF4QzRO3yQ30DtRsQb2Ec9Dv7wgus52qvcHansXsN79GkztKnE3vIoX+oAPJZ4r8DZBAiTPEdF5Nva1AOglkTMhrjmZgEA+YTH66yOztD+bB/61yrp4Lz/J63fb8G72YW0nuMiIjzGOO/1K1mW1p+seX5XkXWuyhjT3j7pLg03JJIILgcGkZhVZ2jZZm/Ux0DBA35p6mjBu7CGtSo9m7tKmxxaXSRsx0B14qzO2Gn5Qf4XkH9sWacO9fvhonQZmYV6PbtIMIuOL9CbsAa4c1zy0I+zaOqnyj3FLtAFNCuDqvDnt+lPhY8CBAvDP3xV2fEAEw0xsLvuueWlXDLW1ntnVx+4DilbZbABAcDeEZHXDaF5Op2+4jBvnKpR7WqEiGEiRMnAaajBOEM5BxSPUVO1w1uJAdoLpz67kMdujEFw3eF2JnivP2m01i8/wDTYQCQDeAEAmD8y6wWgh4NUMDRiC10m8CIkXoIw3rrjpwMXxk9OztmndlzwCM/C5HZbWOEh2G2DtI+yxu2bPTbXLQwzgSBfwnINDBA080mzs1zvlpVdxIdEf8AItWihEybRuWq2EOADmkXSThrj/Uq2TtIXfGQDJ037MVmU+xH4wx2II8T2iOjyVY/DjiAC+7/AMyY2D2FX6OCGbH+pM/d5H8KhtrXuDWvxOEDU8xmvO23sEUm36tUBsgSA9xxIAwjeFDbBQpBr31xEtum48GTi3KdiUu2uWEVJ5ir/Y36lUNgFzpuyGgCXACcBdxOEKtaw1zi17ADiLzCTkMDDhpPsJPtS3U++ZWDS+40+IG62ZiC26SZvE8le0/FLWBhZSL2nAFh1mIGG2RyKy7kLpM1WnN+CaVnqS5rnTBu+FlzGJkOLjIyyGhRWPaQDLoLi2YGYEmcMo1VKfbF+G9y5nhDr2gLsC3LMarJd2wWUC1lJ4gueXObDc5xxMNGE4o7seBrRm+EjTbbWbXcYw95ojbQw5EnkPyvMV7QHvLyaUBrAIa753SWSQMQC52uAKd7ltIMv3GU/A1hac5bJaQQLrRhEE5JrqI1wRPpXzfJ6GmwOynmFWrYnO+stAM+HPnM4ZLyz2Ur1xjGlji4h4dETBcCw5yGgE63tyNaOynNLHsdLy3ASAQRBvATBIabsZRjmpes5OlgcemUctm7/pThdAqvhuhOfEjE85RnC7N9zRGOzCM8dM+i8u4WpoZNR4deBaA4NaQQSQ4A4mdugKY7TeJvVX3nXAWtiAReIgwZcJJVKTi+bIejGXwegABEggjaMlBC88ztMCiS0EDvGMwgZyTGBjotynUlrTtAPUTmt4ScuUc2tpbPJcqhK5z1QvWlHPZJKqSql6rfVUhMkhVc1VL1R9RFCwS9iju0N1VT3iKCj5Uyznf0P3hM0LCTlePBoP8A9l9Ps9FjflYwcGtH2Tbah2lYbUd+4+fUOyXvphndVZDnOBu/uDRHynDwhM2f4Srn6HD/AHFo/uhe7adcU1TQ0hqVHjqHwbU1azm/D/xlP2b4NdmXUxze7ygL1TCjNKlxRW+R55nwk3IvZyp/cuTVL4WpDNx5NYPUFbIeFZrktqDuS9ma34eojV5/5Af2gI7OyaDfon/c5x+6dlcXISQnOT8mT2vZ2MY25TYC57WkhgJgg7p2ZLGsVV4py4NDvm8QEgSG3YLccZMp3tntEse+9ecwXDdAaQCZxIJlYNHtAOe1jHul5AIMiAfpiThMFcGupOf6Tv0YPt5+z1Hb3a1SnWutIu3WuAnHWTBj2Fju7RmWCm0mAYxHhnDEOGspv4utDGPF4m8WNu4tg/PekHHYs5j2ll9ga4xldx0MYLPUhJ6jz59i06UU6Os1jvkF4DHAyAL7sJwOLymK1qNNoe4mTAlwGBEkAXQAcdqFWtTzUa1kNlrAABGN0zmP6T0Wf2lIY1z3SJENa4NcDMAwRGBxw6hUtNtpuS+vJPcbe1xf/DS7V7WZaLga8sbIOAY4nGQ4eLLLGdEnT7SAvhrqj3OJxuNlpALcLr8NuS82/tExfcXiW93izQG98xJk48Vp/D3a7Rfbebd3SSQRB4LSadt8m+lBJJJX8GhT7Wri6XX3kQzuyDeeLsmriDgCQ04ETqrWztKrcJNI02giCcIJjCLowOJ5pG39oufaKQpEtJaWEne5mGsCQj/E1kqMoPc+qX+NrYjwm8M58stFKzV+RSW2VNV8BeyLcAzu2Me4sdHhxaYcTLSMYS5+IGOY+m9gA8bDecSTLvFhEjKISnwvQe7wtqhjSTi0YiLuE4HXyTvwkxjWVX1LpIqkX3ATmSTeOUqqgpNv+CG0lhJ/Zi0u0ntltPwyYBGJMujWcp2LbrvqONlL6hJc8CC0QCGt0gfu9Ut2t2SWMo1nvb44usgN8JPeSXkRMAZodptz6rqTKIvPplzgxkud8jRMNbEC6MittjvCJlqx5sd7epxdxvPLrhOQuhjSARlALk5Yi7vaAOQpOP8Aa3hpC832nWrBlF1QQ196pTMiXAgNvYYjC7Eo/bVhNFtIOeXPc0hzSxwDQ4NeAHHB7fFEjVpVrp20kzCXUwXn8Gv2ja2GpRDyHMAJcPmyYYBA1nRY9a1FznFt4jANBMANDpA2gQcgifEFNlN9xlNzA0vYXlxPeFjrhfGmII2dEnSnHYNZwXRp6EUss55dU8qKHGV4EOEtDxUgySSBAaTrhqvWB+AG4cMty8/2O2kcS4OfoNB1zK1XuW6glwjknrSn/swz3n3J80K+drehSzn7uqG552earaZbhvvPcLu/CTB2+RQy7klQrHDXQnvzS5fvPkocNpKKFYQ1OCt3/BKOduVb+49EbSrNpj96Zpv9/wCEhTJTFN42rBnePU370yx2yUkyqAjNqpAPsRgkWVEVr1NDGg8BXD5SjXqwedAUAhouVH1mtEkgDaVTEjGfNeY+KLMb7Xva+pTwb3bBeAOJLrgIc46yJiDOCiTaWC4RUpVJ0jJ+Ie2WOrPDXsezwjJrhgBIDo2zkViursxBYBIjwueD5uI8kapWeAwdxWDgzuye6e1sAuh0lmt4HDZszznUAHSwVZAnGm+6d2DZHRckoScrPYhq6ago2sfJrdrdrMtNQPcCwtYKeADwQ0kyZu4y4pB1Np+Wo1sH6g9p/wDC8Fm1qjWf9xxYTjBY9pxMT4gJHBBqdrUAYY5zzsLSM8shOZRslu4JU9FLlL9z0lhsz31Gg1cHGJa+8RAOQwP+Vb4g7ObToh4Ly4va05ERfjIRJwXmbL25UD2imx19xcG3WFxwJ+UOBJIjGBtTlqq1KjQXl5JODb1xv0uvxUcGzIIiNdZCa09RytcGE9WF4eBipSa+ldJDbrA5puwXODWwzPWc1f4eay8b9SN2vns+68zU7daGMbTa++CS5zoxxF0AYwAAqO7accQ1rMsscQInHmea2Wi2qMpdVCLTTZ7O22yiy0UnMLiGeJ2RycDhloCrdt/FjKrblzwuN+S4Xpb4QC1uRwznKNy8E/tAuiXEgCADkBJMAZASSeZU05dg0TALjGgaC5x5AE8lpHpY4bfBzanWtytL8m4/ty4S2m5907SRiYnInYBySNS33gRAAJc6M/mOUnNZocmKbLwAa0l0mTmCMIEaRj1W604R8HLLqNWeL/Bq1X13sD3l5YBDTUMCAMAy+ccsmr0n/wAc2i7anPJwZSeTuF+m0/3LzFLs55N57gJEY4nKPLRNMp0malx1nHyGCblGqQR05PLx9np/jOux76LKJa9tJj6eBkC48sGIwxDAeYQu1Ld3rWNuilTYDDS8vMuDAbpd8jfA2GjftXma1secG+Ebs1dtPxAukDdqdM04qTRMpQi/f9Gpb+2C995xdUfAbeedBkANmJSFS1PfgdfpGXRM0bOx0CMdpOHT+E9Z7AwGY4kCeh00WiiZy1W/hC/Ztkffa4uujfHHWdn8r0wI2g8NvFZ1OmANT046aohpt2Hy+60SMGxh/Ie96rgNRO6Em8iMDHvcly9w+odChhZpF7tB0IVSHb+p/KzxaHbOn8qorO1CQzS8XuUMg6+YSBrHU+Sj9QdJ8kWFD7p9wqXne4Wc+s7b6KL7t/VIZ6Jr9ZTDauCzW1EdlUrmO40adTfCaZOcysplYamfe5Hp2gjQjnCBmsypw6owqclksqt1PT+E42rhIw97FLGmaTH7UYOboffBZbK+0xv0Pkri0AZ4HgB6lQ0UmaN/2EvaYILSY4ZgjEHGRIMHkhB0iWkefqgd9GBz4fhCyDPn3anb9ayVHUn0abjJc2o0BpeHuJDvE1wGuAyiFldpfGlZwDWFtPabrHTuH/Tw4wvYfHHZff0bzRNWlL2wM2x4mzwxG9o2r5lT7GryHXWtgzDiCOYxkcUPHkcY7uEZtpeXOLnOLjtcST1Kmz2qowOax7mB2Lg1xE3ZiYzjFbFL4cP1VBlo0n1hFHw+wZvceEBTuRfYk/B5+taaj4L3udiYLnE45mCTnj5pdep/0aiM2uPEn7ITrPZ2/SOcn1Kdv0S9KuWvyebRGE6Alb/dsxLWgDbAHrCkPZMXo34x5D0lUlIzaguWYlOzPOTTzH5TtnsD9XBuEYHHHPktVrWE/wDcAxjFrvccVaqwNd4Xhw2yBO4AStFGXshz018lbP2axuJDn8cvx1TrCY8IAG7+MEvRtbZxAgbHRPMjBXd2o+fBLeYcesSq2Ly7J79YiqLmzOnxEnLCcf46I9MAOABnZiDHLJvPFKtexx8ZqEzicJPM5pmixgPhv7sG+gVxVGEpW7GTSB1md/nrvRTZb0R1g+/VTSe05Ox34o/fvOAfllh/C0Rk2dQst04mPM+ceacbeGyDuz44lJd9UOZad2X2XFz/AOmOX4hWqQmzQc6R7H8oVUAfXgNMD6gnzSznu1DfJW70DYnYjg5v7vM+hUucdCFTvm6kcw37LnVGnGTyJH8JMZPMKuHHqPuqOcNvUD1xQnnYRyhSARzh7JPoqGoOHIoJ49VUtGp9QkMI6oND76rrx3+X/wCkE8+pVb/+7qUhmwyujNrbD1zWdTOk9UQPj+FgdaZpNfv6YpihWG0DpPmsylU9n+AiNrHX7fwkUma1+Dj5e8EzTrDbwJz4Tqsdtb3j+YRqVcDDHHWTHngpbGjVfXg5kdfKEdlYESMRsifIrNccILoOgj8AJf8AUFpwdPM9FPJd0bLqrMw4t4iR5KKtqa0SXjbIxMRpGI5rMFrJmWAcInmSQgV6vhJMknbp+eqqMc5JlPGDOtnbL3m4XXGOmfDeN07SZ8o+6yrVbbOz5a1//g4f3Qr9q2phY4AYnDWeWq8bUBlVKEVzkn/JlVLH0blftpn0zzw9Asyv2o85eHh+UlC4hH0Q9SUuWMC1kkXw5w2Fxx5pql2w9jS1kMB/ben1WdAUQmnRDdhatpe8y5xcd5k+aqXnLRcI1lSBsKCbLd66IvGNmiuAdkrmM94I92MxKdE2DoslNspxnB24bF1Axjj73I7XA5e+qpRE5BmCIID+WW7atChUcAMPIJOjsjr/AJTTANitImwzam0T/wASCOeKs142xsxy5lDvxkRz/wAqQ/f5fZUSGFbcDvld+rA/cOAnzSneCYiOAP2Vu82eh/lOwoJUtPF3HD1CXNWcYjlj5Il46gdR/Co5+0Dl+UgJ7zD5iPP1VmWkfuk8gUK8BoqX2n6W++SQ6GjVOvlH5VH19x6pKo8cOAUCpscOiVlUN983ZHHFCdaG/uPIBAc/aen+VUvnUFJsdDBrt2nou71u1KP5KJGwdQi2OkazKhGE8sR91dtbbCWY+d/KPspJG0/ZYWdNDYqic46oram3Hqkms2HzCI0ubr76pWA+yDk4A+9quzDAjrP2SlJjiZk4c/RGdUaRnjsxCVjSNCjUJzJdGhJw4SjtqiBfcwf3dIwWM2oBjdnn/CZFov4HA74McJGGihp2aKSNFlJowBvTjhnpvg5rN7ZqgAtBMDdjOuMQgVAIPiadzcXLMtVcxdkwNsx6LSEbeWZak0lhGdbHmJMxpJzWY5gOMjgBitSu29m5vvdKUqNaMJbPOPytqOVyyIObGmCoRKdgbRyB+6q9g3k8ICmgUhYBS0lHLY9/dQ6dkJBuBhqveGyPe8qQDvPIru7GpTQWcDsE81cOx05qoHLiigj2MPNUhB6ZJRmckBnNHZB94+qpEhqbgNkphrksPeEqzCc8PP8AKYB3Hf6od8/uPX7Ib3nb6BcKnHyKLAJfO1dO4oTqh39P4XGpwRYFw8bCDuKIBOrkv3wGnRQKzN/klY6GSXaP6z/hVLjqAeBQhaZ19f4VX1eHP/CdoYa+f2x73Kjwdp6IJqjO8OSq2oTk+dyVjLkO1AhUubAF187goc/afP8AhFgWA29P8K8DZ5oQqDfyKm+NrvfJADTHzvViSNTGzP8AKSkbuqI159iVznSOtqjIkcICIyqNY5Ax6pNpacvt+VZ1M8jwSHkeFYgySbu1pP3C0WOcG3gHObGpn0BXnxWu4GSOJ9Ewypc8TXAnY0GeeIUNFxdGkKYdN5lzDQHHkUpaLOW/KXgHUi6hN7UflDRjOUbCc3btiMO0G6MxOcYjlJTTafApbWuRN9N0YP8AfEobbK/MZfu09fRPVbXh8o6EepKQq29zsw0jUkH7haxaZhJNC7rO2SL8nUw7HzS7mU24XnOOwDBFqW5uQGBzIaBPAxMITbTTGJZJ3/haJowplGhpOF47hj6AKIB0ceOAVzaw7C7A4rjVB+VvQADzlFIWSO7j6fT8qtzDGBwVroiXEg8RPTRBluJA6mUmNJlrs6++q4M2NMb4Ve+2AchiuFQ5ZeSMBTJDccSBuGKu1+gx5oTAM1e/0RYw2IRWuSt/f76Kb5VWSxrvPcqwrhJl21QHb07Ae72dVEcEqCVBqlK/YxsPO7guNUFK/qN3p91Hfj3CLChi/wC4Qy7aQeI/CHf9wu77aCjA8lyGnXp+F1zf5qnfN09FR1Ybun4SwPIYMPFddOh5IIqDVSTsdPFGADOc7X8qA6c1QSP4UF5KAL3CMgrXv6UNpO1Ww2+aAIBjOURlZusHcZ9VAaIGCG8LDk6Rp1QRhPvfAV6NfQuif3GMuBVaWnJDqJDGrxyIEdfWUekxv064G67H8LIDzAxPuFosHy8D6FJ8FLLDVGAZ34029Dh5oLqjSIHUmfUwU1Z/fRWr/M7n6pRdhKKRlVnN2mfexLd2TiBA2uWmVn2lxl2K1iYTAEAag8IH2lQWbSOQlUZ91UqzILAnPLgpN44CfRBCluqBFnUt45BRdbqZO4KrQr1c0yrK4aAqHzsV3fKpp5JUKwbcFYLlzNUASBsUyq6KWpksINwUobs+SumBJcNyi8N3JU0K6nmUDom97/wqueNijaoKQyveDgu79QVVymykggqzmrFwSpXBFjoYLR/lVLDoVTRWOiYjg4jRE7w7FYrnZhAWQ2pyV752+v4Q3aqiAP/Z",
    text: "Preserve What Matters Most. Southeast Vaults – Safeguarding Your Precious Possessions with Unparalleled Care",
    person: "",
  },
  {
    img: "data:image/jpeg;base64,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",
    text: "Embrace Unwavering Security. Southeast Vaults – A Haven for Your Prized Items, Providing Unmatched Peace and Assurance.",
    person: "",
  },
];

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
