import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { ga, skeleton } from '../../utils';
import LazyImage from '../lazy-image';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { CgDribbble } from 'react-icons/cg';
import {
  FaBehanceSquare,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaMastodon,
  FaReddit,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { RiDiscordFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { SiResearchgate, SiX, SiUdemy } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../interfaces/sanitized-config';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
  social: SanitizedSocial;
  github: SanitizedGithub;
  googleAnalyticsId?: string;
}

const getFormattedMastodonValue = (
  mastodonValue: string,
  isLink: boolean,
): string => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @param social - The social links object.
 * @param github - The GitHub object.
 * @param googleAnalyticsId - The Google Analytics ID for tracking.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
  social,
  github,
  googleAnalyticsId,
}): React.JSX.Element => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : profile.bio}
          </div>

          {/* Location and Company */}
          {!loading && profile && (
            <div className="mt-3 text-sm text-base-content opacity-70 space-y-1">
              {profile.location && (
                <div className="flex items-center justify-center gap-1">
                  <MdLocationOn size={14} />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.company && (
                <div className="flex items-center justify-center gap-1">
                  <FaBuilding size={12} />
                  <span>{profile.company}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Social Links */}
        {!loading && (
          <div className="flex flex-wrap justify-center gap-2 mt-4 px-4">
            <a
              href={`https://github.com/${github.username}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
              title="GitHub"
            >
              <AiFillGithub size={18} />
            </a>
            {social?.linkedin && (
              <a
                href={`https://www.linkedin.com/in/${social.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            )}
            {social?.website && (
              <a
                href={
                  !social.website.startsWith('http')
                    ? `http://${social.website}`
                    : social.website
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Website"
              >
                <FaGlobe size={18} />
              </a>
            )}
            {social?.email && (
              <a
                href={`mailto:${social.email}`}
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Email"
              >
                <RiMailFill size={18} />
              </a>
            )}
            {social?.phone && (
              <a
                href={`tel:${social.phone}`}
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Phone"
              >
                <RiPhoneFill size={18} />
              </a>
            )}
            {social?.x && (
              <a
                href={`https://x.com/${social.x}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="X"
              >
                <SiX size={18} />
              </a>
            )}
            {social?.mastodon && (
              <a
                href={getFormattedMastodonValue(social.mastodon, true)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Mastodon"
              >
                <FaMastodon size={18} />
              </a>
            )}
            {social?.researchGate && (
              <a
                href={`https://www.researchgate.net/profile/${social.researchGate}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="ResearchGate"
              >
                <SiResearchgate size={18} />
              </a>
            )}
            {social?.youtube && (
              <a
                href={`https://www.youtube.com/@${social.youtube}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            )}
            {social?.medium && (
              <a
                href={`https://medium.com/@${social.medium}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Medium"
              >
                <AiFillMediumSquare size={18} />
              </a>
            )}
            {social?.dev && (
              <a
                href={`https://dev.to/${social.dev}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Dev"
              >
                <FaDev size={18} />
              </a>
            )}
            {social?.stackoverflow && (
              <a
                href={`https://stackoverflow.com/users/${social.stackoverflow}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Stack Overflow"
              >
                <FaStackOverflow size={18} />
              </a>
            )}
            {social?.instagram && (
              <a
                href={`https://www.instagram.com/${social.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Instagram"
              >
                <AiFillInstagram size={18} />
              </a>
            )}
            {social?.facebook && (
              <a
                href={`https://www.facebook.com/${social.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            )}
            {social?.reddit && (
              <a
                href={`https://www.reddit.com/user/${social.reddit}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Reddit"
              >
                <FaReddit size={18} />
              </a>
            )}
            {social?.threads && (
              <a
                href={`https://www.threads.net/@${social.threads.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Threads"
              >
                <FaSquareThreads size={18} />
              </a>
            )}
            {social?.telegram && (
              <a
                href={`https://t.me/${social.telegram}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Telegram"
              >
                <FaTelegram size={18} />
              </a>
            )}
            {social?.discord && (
              <a
                href="https://discord.com/app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Discord"
              >
                <RiDiscordFill size={18} />
              </a>
            )}
            {social?.dribbble && (
              <a
                href={`https://dribbble.com/${social.dribbble}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Dribbble"
              >
                <CgDribbble size={18} />
              </a>
            )}
            {social?.behance && (
              <a
                href={`https://www.behance.net/${social.behance}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Behance"
              >
                <FaBehanceSquare size={18} />
              </a>
            )}
            {social?.udemy && (
              <a
                href={`https://www.udemy.com/user/${social.udemy}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost opacity-70 hover:opacity-100"
                title="Udemy"
              >
                <SiUdemy size={18} />
              </a>
            )}
          </div>
        )}
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <a
              href={resumeFileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              download
              rel="noreferrer"
              onClick={() => {
                if (googleAnalyticsId) {
                  ga.event('Download Resume', {
                    file_url: resumeFileUrl,
                  });
                }
              }}
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
