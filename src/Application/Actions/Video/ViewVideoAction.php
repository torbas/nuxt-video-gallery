<?php
declare(strict_types=1);

namespace App\Application\Actions\Video;

use Psr\Http\Message\ResponseInterface as Response;

class ViewVideoAction extends VideoAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $video_id = (int) $this->resolveArg('id');
        $video = $this->videoRepository->findVideoOfId($video_id);

        $this->logger->info("Video of id `${video_id}` was viewed.");

        return $this->respondWithData($video);
    }
}