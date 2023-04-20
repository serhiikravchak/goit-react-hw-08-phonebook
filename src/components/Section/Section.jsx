import { PageSection, HeadTitle, Title } from "./Section.styled";

export const Section = ({ headtitle, title, children }) => (
    <PageSection>
        {headtitle && <HeadTitle>{headtitle}</HeadTitle>}
        {title && <Title>{title}</Title>}
        {children}
    </PageSection>
)